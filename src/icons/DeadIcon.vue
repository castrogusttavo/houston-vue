
<template>
  <Icon :iconName="'dead'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dead'
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
