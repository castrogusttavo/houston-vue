
<template>
  <Icon :iconName="'cards-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cards01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cards-01'
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
