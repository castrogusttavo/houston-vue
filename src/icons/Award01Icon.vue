
<template>
  <Icon :iconName="'award-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Award01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'award-01'
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
