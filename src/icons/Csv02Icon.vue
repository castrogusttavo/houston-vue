
<template>
  <Icon :iconName="'csv-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Csv02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'csv-02'
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
