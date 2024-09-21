
<template>
  <Icon :iconName="'ungroup-items'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UngroupItemsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ungroup-items'
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
