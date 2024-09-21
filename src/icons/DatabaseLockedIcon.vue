
<template>
  <Icon :iconName="'database-locked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DatabaseLockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database-locked'
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
