
<template>
  <Icon :iconName="'high-heels-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HighHeels01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'high-heels-01'
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
