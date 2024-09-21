
<template>
  <Icon :iconName="'tv-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tv01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tv-01'
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
