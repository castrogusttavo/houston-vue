
<template>
  <Icon :iconName="'repeat-one-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RepeatOne01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'repeat-one-01'
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
