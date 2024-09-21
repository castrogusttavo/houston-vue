
<template>
  <Icon :iconName="'brochure'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BrochureIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'brochure'
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
