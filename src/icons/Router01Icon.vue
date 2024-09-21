
<template>
  <Icon :iconName="'router-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Router01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'router-01'
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
