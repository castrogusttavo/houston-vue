
<template>
  <Icon :iconName="'label-important'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LabelImportantIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'label-important'
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
