
<template>
  <Icon :iconName="'locker'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LockerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'locker'
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
