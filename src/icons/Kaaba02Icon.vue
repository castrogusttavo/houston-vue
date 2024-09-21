
<template>
  <Icon :iconName="'kaaba-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Kaaba02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kaaba-02'
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
