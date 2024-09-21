
<template>
  <Icon :iconName="'guest-house'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GuestHouseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'guest-house'
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
