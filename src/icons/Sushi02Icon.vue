
<template>
  <Icon :iconName="'sushi-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sushi02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sushi-02'
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
