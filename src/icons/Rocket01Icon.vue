
<template>
  <Icon :iconName="'rocket-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Rocket01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rocket-01'
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
