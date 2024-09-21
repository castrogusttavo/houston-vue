
<template>
  <Icon :iconName="'seo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SeoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'seo'
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
