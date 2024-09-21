
<template>
  <Icon :iconName="'news-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'News01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'news-01'
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
