
<template>
  <Icon :iconName="'sword-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sword01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sword-01'
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
