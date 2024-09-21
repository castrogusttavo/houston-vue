
<template>
  <Icon :iconName="'door-lock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DoorLockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'door-lock'
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
