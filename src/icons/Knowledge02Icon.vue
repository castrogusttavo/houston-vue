
<template>
  <Icon :iconName="'knowledge-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Knowledge02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'knowledge-02'
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
