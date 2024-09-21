
<template>
  <Icon :iconName="'align-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-top'
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
