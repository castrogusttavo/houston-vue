
<template>
  <Icon :iconName="'label'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LabelIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'label'
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
