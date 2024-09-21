
<template>
  <Icon :iconName="'relieved-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Relieved02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'relieved-02'
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
