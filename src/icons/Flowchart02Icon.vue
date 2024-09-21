
<template>
  <Icon :iconName="'flowchart-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Flowchart02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flowchart-02'
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
