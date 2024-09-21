
<template>
  <Icon :iconName="'moon-cloud'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud'
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
