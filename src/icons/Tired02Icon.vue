
<template>
  <Icon :iconName="'tired-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tired02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tired-02'
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
