
<template>
  <Icon :iconName="'bone-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bone01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bone-01'
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
