
<template>
  <Icon :iconName="'moon-cloud-snow'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudSnowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud-snow'
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
