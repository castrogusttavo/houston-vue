
<template>
  <Icon :iconName="'door'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DoorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'door'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
