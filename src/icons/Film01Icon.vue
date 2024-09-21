
<template>
  <Icon :iconName="'film-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Film01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'film-01'
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
