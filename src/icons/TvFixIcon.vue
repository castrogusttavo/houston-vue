
<template>
  <Icon :iconName="'tv-fix'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TvFixIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tv-fix'
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
