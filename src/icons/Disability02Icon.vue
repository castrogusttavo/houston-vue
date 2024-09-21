
<template>
  <Icon :iconName="'disability-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Disability02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'disability-02'
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
