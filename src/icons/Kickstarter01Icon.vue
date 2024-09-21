
<template>
  <Icon :iconName="'kickstarter-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Kickstarter01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kickstarter-01'
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
