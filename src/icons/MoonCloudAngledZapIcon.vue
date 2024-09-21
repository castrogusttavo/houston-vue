
<template>
  <Icon :iconName="'moon-cloud-angled-zap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudAngledZapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud-angled-zap'
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
