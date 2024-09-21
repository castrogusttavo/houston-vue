
<template>
  <Icon :iconName="'locked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'locked'
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
