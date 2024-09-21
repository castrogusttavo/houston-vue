
<template>
  <Icon :iconName="'circle-unlock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleUnlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-unlock-01'
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
