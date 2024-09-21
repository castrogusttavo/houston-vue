
<template>
  <Icon :iconName="'chess-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Chess01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chess-01'
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
