
<template>
  <Icon :iconName="'sad-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sad01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sad-01'
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
