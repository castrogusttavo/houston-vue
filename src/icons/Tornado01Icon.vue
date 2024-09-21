
<template>
  <Icon :iconName="'tornado-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tornado01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tornado-01'
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
