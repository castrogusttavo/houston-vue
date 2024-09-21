
<template>
  <Icon :iconName="'align-box-middle-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignBoxMiddleCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-box-middle-center'
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
